import express, { Express } from 'express';
import HelloWorld from './controllers/HelloWorld';
import cors from 'cors';
import {
    SwaggerInitializer,
    ExpressInitializer,
    SwaggerEndpoint,
    Description,
    Title,
    Version,
    BearerTokenJWT,
    Theme,
    ThemesType
} from 'express-swagger-autoconfigure';


@SwaggerInitializer
@SwaggerEndpoint('/doc')
@Description('Essa é uma descrição teste')
@Title('API')
@Version('1.0.0')
@BearerTokenJWT(true)
@Theme(ThemesType.NEWS_PAPER)
export default class App {
    @ExpressInitializer
    private app: Express;
    constructor() {
        this.app.use(cors());
        this.app.use(express.json());
        new HelloWorld();
    }
    public getApp(): Express {
        return this.app;
    };
}