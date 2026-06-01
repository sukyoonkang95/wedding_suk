declare global {
  interface Window {
    daum?: {
      roughmap?: {
        phase?: string
        cdn?: string
        URL_KEY_DATA_LOAD_PRE?: string
        url_protocal?: string
        url_cdn_domain?: string
        Lander?: new (options: {
          timestamp: string
          key: string
          mapWidth: string
          mapHeight: string
        }) => {
          render: () => void
        }
      }
    }
  }
}

export {}
