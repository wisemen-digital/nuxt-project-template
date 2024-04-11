import type { Product } from '~/models/product/detail/product.model'
import type { ProductDto } from '~/models/product/detail/productDto.model'
import type { ProductIndex } from '~/models/product/index/productIndex.model'
import type { ProductIndexDto } from '~/models/product/index/productIndexDto.model'

export class ProductTransformer {
  static toProduct(dto: ProductDto): Product {
    return dto
  }

  static toProductIndex(product: ProductIndexDto): ProductIndex {
    return product
  }
}
