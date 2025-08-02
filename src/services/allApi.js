import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

export const registerApi = async (reqBody) => {
    return await commonApi('POST', `${serverUrl}/register`, reqBody)
}

export const loginApi = async (reqBody) => {
    return await commonApi('POST', `${serverUrl}/login`, reqBody)
}
export const addproductApi = async (reqBody, headers) => {
  return await commonApi('POST', `${serverUrl}/add-product`, reqBody, headers);
};

export const getAllProductApi = async (reqHeader) => {
    return await commonApi('GET', `${serverUrl}/view-user-products`, '', reqHeader)
}

export const deleteProductApi = (productId, headers) => {
    return commonApi("DELETE", `${serverUrl}/delete-product/${productId}`, "", headers);
};

export const updateProductApi = async (productId, reqBody, reqHeader) => {
    return await commonApi('PUT', `${serverUrl}/update-product/${productId}`, reqBody, reqHeader);
};



