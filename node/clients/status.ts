import type { InstanceOptions, IOContext, IOResponse } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class Status extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(`http://${context.account}.vtexcommercestable.com.br`, context, {...options, headers: {
      "X-VTEX-Use-Https": context.authToken,
      "X-VTEX-API-AppKey": "vtexappkey-walmarthn-GALMCR",
      "X-VTEX-API-AppToken": "ZEFDRFMHLOUEFNBVYSNKYBOSFEFJXONMJIHXPKMEBOLVQQYDIWTBHYGGKXPVDUFGOYZSAXUIHMOTPHFRILFCYPRDMDTTXXXGGMMHVKPNSGIFEIMKRNSMMJYDWGFRSXET"
    }})
  }

  public async getStatus(status: number): Promise<string> {
    return this.http.get(status.toString(), {
      metric: 'status-get',
    })
  }

  public async getDocuments(id: string, internationalPhone: string): Promise<string> {

    return await this.http.patch(`/api/dataentities/CL/documents/${id}`, {internationalPhone})
  }

  public async getStatusWithHeaders(
    status: number
  ): Promise<IOResponse<string>> {
    return this.http.getRaw(status.toString(), {
      metric: 'status-get-raw',
    })
  }
}
