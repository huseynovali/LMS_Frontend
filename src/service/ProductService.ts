import { axiosPrivate } from "./axiosPrivate";

const ProductService = {
  async addProduct(data: any) {
    return axiosPrivate.post("/product/add", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  async getProductsById(id: string) {
    return axiosPublic.get(`/product/${id}`);
  },
  async getProductByOwnerId(id: string, page: number, size: number) {
    return axiosPublic.get(`product/all/user/${id}`, {
      params: {
        page,
        size,
      },
    });
  },

  async sameProduct(categoryName: string, productId: string) {
    return axiosPublic.get(`/product/${productId}/category/${categoryName}`, {
      params: {
        page: 0,
        size: 7,
      },
    });
  },

  async filterProduct(data: {
    categoryName: string | null;
    title: string | null;
    minPrice: string | null;
    maxPrice: string | null;
    sex: string | null;
    size: string | null;
    rate: number | null;
    isNew: boolean | null;
  }) {
    return axiosPublic.get("/product/filter", {
      params: {
        minprice: data.minPrice ?? "0",
        maxprice: data.maxPrice ?? "10000",
        gender: data.sex,
        isNew: data.isNew,
        minrate: data.rate,
        sizeProduct: data.size,
        title: data.title,
        categoryName: data.categoryName,
      },
    });
  },

  async addFeedback(
    productId: string,
    ratingRequest: { rate: number; feedback: string }
  ) {
    return axiosPrivate.post(`/feedback/add/${productId}`, {
      comment: ratingRequest.feedback,
      ratingValue: ratingRequest.rate,
    });
  },
  async getFeedback(productId: string, size: number) {
    return axiosPublic.get(`/feedback/all/${productId}?page=0&size=${size}`);
  },
  async deleteFeedback(id: string) {
    return axiosPrivate.delete(`/feedback/delete/${id}`);
  },
  async deleteProduct(id: string) {
    return axiosPrivate.delete(`/product/${id}`);
  },
  async updateProduct(id: string, data: any) {
    return axiosPrivate.put(`/product/${id}`, {
      title: data.title,
      description: data.description,
      price: data.price,
      address: data.address,
      categoryName: data.category,
      isNew: data.isNew,
      sex: data.sex,
      size: data.size,
    });
  },
};

export default ProductService;
