import { useApi } from '@base/composables/api/useApi'
import {
  type PaginatedData,
  paginatedDataSchema,
} from '@base/models/paginated-data/paginatedData.model'
import type { Order } from '@cart/models/order/detail/order.model'
import { orderDtoSchema } from '@cart/models/order/detail/orderDto.model'
import type { OrderIndex } from '@cart/models/order/index/orderIndex.model'
import { orderIndexDtoSchema } from '@cart/models/order/index/orderIndexDto.model'
import { OrderTransformer } from '@cart/models/order/order.transformer'
import type { OrderUuid } from '@cart/models/order/orderUuid.model'

export class OrderService {
  static async getAll(page: number, search?: null | string): Promise<PaginatedData<OrderIndex>> {
    const api = useApi()
    const response = await api.get({
      config: {
        params: {
          page,
          per_page: 20,
          search: search == null || search === '' ? undefined : search,
        },
      },
      responseSchema: paginatedDataSchema(orderIndexDtoSchema),
      url: `/orders`,
    })

    return {
      ...response,
      data: response.data.map(OrderTransformer.toOrderIndex),
    }
  }

  static async getByUuid(uuid: OrderUuid): Promise<Order> {
    const api = useApi()
    const response = await api.get({
      responseSchema: orderDtoSchema,
      url: `/orders/${uuid}`,
    })

    return OrderTransformer.toOrder(response)
  }
}
