import { api } from "@/shared/api/axios";
import { CardProductsResponseSchema, LoanProductsResponseSchema, type CreateLoanProduct, type UpdateLoanProduct } from "../model/products.schema";


// ==================== Loan Products ====================

export const getLoanProducts = async (per_page = 1000) => {
    const response = await api.get("/admin/loan-products", {
        params: { per_page },
    });
    return LoanProductsResponseSchema.parse(response.data);
};

export const createLoanProduct = async (data: CreateLoanProduct) => {
    const response = await api.post("/admin/loan-products", data);
    return response.data;
};

export const updateLoanProduct = async (id: number, data: UpdateLoanProduct) => {
    const response = await api.patch(`/admin/loan-products/${id}`, data);
    return response.data;
};

export const deleteLoanProduct = async (id: number) => {
    const response = await api.delete(`/admin/loan-products/${id}`);
    return response.data;
};

// ==================== Card Products ====================

export const getCardProducts = async (per_page = 20) => {
    const response = await api.get("/admin/card-products", {
        params: { per_page },
    });
    return CardProductsResponseSchema.parse(response.data);
};
