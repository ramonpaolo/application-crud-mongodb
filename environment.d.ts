/* eslint-disable no-unused-vars */
declare global{
    namespace NodeJs{
        interface ProcessEnv {
            URL_MONGODB: string = 'mongodb://root:password@localhost:27017';
        }
    }
}

export {};
