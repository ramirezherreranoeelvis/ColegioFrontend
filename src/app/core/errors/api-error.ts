export default class ApiError extends Error {
      constructor(message: any) {
            super(message);
            this.name = 'ApiError';
      }
}
