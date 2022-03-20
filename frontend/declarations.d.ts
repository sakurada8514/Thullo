declare namespace NodeJS {
  // 環境変数名の定義
  interface ProcessEnv {
    /** 現在の Node.js 実行環境 */
    readonly REACT_APP_API_BASEURL: string;

    /** GitHub アクセストークン */
    readonly REACT_APP_API_UNSPLASH_ACCESS_KEY: string;
  }
}
