import {usePiniaStore} from "./index";

export default {
    async loadAllDivision(){
        const url = `${baseURL}/utility/get-all-division`
        const response = await axios.get(url)

        const store = this.store()
        store.$patch(state => {
            state.divisions = response.data
        })

    },

    async getDistrictForDivision(payload){
        const store = this.store()
        const url = `${baseURL}/utility/get-district-for-division`
        const response = await axios.post(url, payload)

        store.$patch(state => {
            if (payload.from === 'permanent'){
                state.permanentDistricts = response.data
            }else {
                state.districts = response.data
            }
        })

    },

    async getUpazilaForDistrict(payload){
        const url = `${baseURL}/utility/get-upazila-for-district`
        const response = await axios.post(url, payload)

        const store = this.store()
        store.$patch(state => {
            if (payload.from === 'permanent'){
                state.permanentUpazilas = response.data
            }else {
                state.upazilas = response.data
            }
        })

    },

    async loadSupplierFromServer(){
        const url = `${baseURL}/supplier/get-all-supplier`
        const response = await axios.get(url)

        const store = this.store()
        store.$patch(state => {
            state.suppliers = response.data
        })
    },

    async loadCustomerFromServer(){
        const url = `${baseURL}/pos-customer/get-all-customer`
        const response = await axios.get(url)
        const store = this.store()
        store.$patch(state => {
            state.customers = response.data.data
        })
    },

    async loadCategoryFromServer(){
        const url = `${baseURL}/category/get-all-category`
        const response = await axios.get(url)

        const store = this.store()
        store.$patch(state => {
            state.categories = response.data
        })
    },

    async loadBrandFromServer(){
        const url = `${baseURL}/brand/get-all-brand`
        const response = await axios.get(url)

        const store = this.store()
        store.$patch(state => {
            state.brands = response.data
        })
    },

    async loadUnitFromServer(){
        const url = `${baseURL}/unit/get-all-unit`
        const response = await axios.get(url)

        const store = this.store()
        store.$patch(state => {
            state.units = response.data
        })
    },

    async loadBankFromServer(){
        const url = `${baseURL}/bank/get-all-bank`
        const response = await axios.get(url)

        const store = this.store()
        store.$patch(state => {
            state.bankAccounts = response.data
        })
    },

    async loadCashFromServer(){
        const url = `${baseURL}/cash/get-all-cash`
        const response = await axios.get(url)

        const store = this.store()
        store.$patch(state => {
            state.cashes = response.data
        })
    },

    async loadProductFromServer(){
        const url = `${baseURL}/product/get-all-purchase-product`
        const response = await axios.get(url)

        const store = this.store()
        store.$patch(state => {
            state.products = response.data
        })
    },

    async loadOrderDetailsFromServer(payload){
        const url = `${baseURL}/pos-return/get-order-details/${payload}`
        const response = await axios.get(url)
        console.log(response)
        const store = this.store()
        store.$patch(state => {
            state.order_id = response.data.id
            state.customer_id = response.data.customer_id ? response.data.customer_id : null
            state.subtotal = response.data.subtotal
            state.discount = (response.data.discount - response.data.vat)
            state.saleCartProducts = []
            response?.data?.order_details?.forEach(detail => {
                detail.productData = {
                    data: {
                        id: detail.product.id,
                        attributes: {
                            category_id: detail.product.category_id,
                            name_en: detail.product.name_en,
                            purchase_price: detail.product.purchase_price,
                            regular_price: detail.product.regular_price,
                            special_price: detail.product.special_price,
                            unit_quantity: detail.product.unit_quantity,
                            stock: detail.product.stock,
                            unit_name: detail.product.unit_name,
                        },
                    },
                    discount: detail.discount,
                    discountAmount: detail.discount,
                    discountType: "flat",
                    order_by: Date.now(),
                    quantity: detail.quantity,
                    sale_price: detail.sale_price,
                    total_price: detail.sale_price * detail.quantity,
                }
                state.saleCartProducts.push(detail.productData)
            })
        })
    },

    async loadSaleProductFromServer(){
        const url = `${baseURL}/product/get-all-sale-product`
        const response = await axios.get(url)

        const store = this.store()
        store.$patch(state => {
            state.saleProducts = response.data
        })
    },

    async loadOfferProductFromServer(){
        const url = `${baseURL}/product/get-all-offer-product`
        const response = await axios.get(url)

        const store = this.store()
        store.$patch(state => {
            state.saleProducts = response.data
        })
    },

    async getSearchProduct(payload){
        const store = this.store()
        store.$patch(state => {
            state.productSkeleton = true
        })
        const url = `${baseURL}/product/get-search-product/${payload.search_by}/products?page=${payload.page}`
        const response = await axios.get(url)

        store.$patch(state => {
            if (payload.page == 1) {
                state.searchProducts = response.data
            } else {
                state.searchProducts.data.push(...response.data.data);
            }
            state.productSkeleton = false
        })
    },

    async getBarcodeProduct(payload){
        const store = this.store()
        const url = `${baseURL}/product/get-barcode-product/${payload}`
        const response = await axios.get(url)
        store.$patch(state => {
            if (response.data.data) {
                state.barcodeProduct = response.data
            }else{
                state.barcodeProduct = {}
            }
        })
    },

    async addToCart() {
        if (Object.keys(this.store().barcodeProduct).length > 0) {
            const index = this.store().saleCartProducts.findIndex(
                (product) => product.data.id == this.store().barcodeProduct.data.id
            );

            if (index === -1) {
                const newProduct = {
                    ...this.store().barcodeProduct,
                    quantity: 1,
                    discount: 0,
                    sale_price: this.store().barcodeProduct?.data?.attributes?.regular_price,
                    discountAmount: 0,
                    discountType: "flat",
                    order_by: Date.now(),
                    total_price: 0,
                };

                this.store().saleCartProducts.push(newProduct);

                this.store().saleCartProducts.sort(function (a, b) {
                    return b.order_by - a.order_by;
                });
            }else{
                const product = this.store().saleCartProducts.find(
                    (product) => product.data.id == this.store().barcodeProduct.data.id
                );

                product.order_by = Date.now()
                product.quantity = product.quantity + 1

                this.store().saleCartProducts.sort(function (a, b) {
                    return b.order_by - a.order_by;
                });
            }
        }
    },


    async addSupplier(payload){
        const store = this.store()
        const url = `${baseURL}/supplier`
        try {
            await axios.post(url, payload);
            await this.loadSupplierFromServer()
            alert().fire({
                icon: 'success',
                title: 'supplier added successfully!'
            })
        } catch (e) {
            alert().fire({
                icon: 'warning',
                title: 'supplier not added!'
            })
            store.$patch((state) => {
                state.errors = e.response.data.errors
            })
            alert('Failed to saved')
        }
    },

    async addCustomer(payload){
        const store = this.store()
        const url = `${baseURL}/pos-customer`
        try {
            await axios.post(url, payload);
            await this.loadCustomerFromServer()
            alert().fire({
                icon: 'success',
                title: 'customer added successfully!'
            })
            store.$patch((state) => {
                state.errors = []
            })
        } catch (e) {
            alert().fire({
                icon: 'warning',
                title: 'customer not added!'
            })
            store.$patch((state) => {
                state.errors = e.response.data.errors
            })
            alert('Failed to saved')
        }
    },

    async addProduct(payload){
        const store = this.store()
        const url = `${baseURL}/product`
        try {
            let response = await axios.post(url, payload, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            await this.loadProductFromServer()
            alert().fire({
                icon: 'success',
                title: 'Product added successfully!'
            })
        } catch (e) {
            store.$patch((state) => {
                state.errors = e.response.data.errors
            })
            alert().fire({
                icon: 'warning',
                title: 'Product not added!'
            })
        }
    },

    store() {
        return usePiniaStore()
    }
}
