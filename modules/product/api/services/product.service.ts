import { useApi } from '~/composables/api/useApi'
import type { Product } from '~/models/product/detail/product.model'
import { productDtoSchema } from '~/models/product/detail/productDto.model'
import type { ProductIndex } from '~/models/product/index/productIndex.model'
import { productIndexDtoSchema } from '~/models/product/index/productIndexDto.model'
import { ProductTransformer } from '~/models/product/product.transformer'
import type { ProductUuid } from '~/models/product/productUuid.model'

export class ProductService {
  static async getAll(): Promise<ProductIndex[]> {
    const api = useApi()
    const data = await api.get({
      responseSchema: productIndexDtoSchema.array(),
      url: '/products',
    })

    return data.map(ProductTransformer.toProductIndex)
  }

  static async getByUuid(productUuid: ProductUuid): Promise<Product> {
    const api = useApi()
    const data = await api.get({
      responseSchema: productDtoSchema,
      url: `/products/${productUuid}`,
    })

    return ProductTransformer.toProduct(data)
  }
}
