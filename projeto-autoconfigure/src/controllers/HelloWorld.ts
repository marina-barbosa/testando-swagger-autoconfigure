import { Request, Response } from 'express';
import {
    Controller,
    Post,
    StatusResponse,
    Body,
    Get,
    Query
} from 'express-swagger-autoconfigure'

@Controller("/api")
export default class HelloWorld {
    @StatusResponse(200, "Check API successfully")
    @StatusResponse(400, "Check API unsuccessfully")
    @Body({
        nome: 'Hortência',
        email: 'flores@gmail.com'
    })
    @Post('/get-api') //precisa ser o primeiro
    public hello(request: Request, response: Response): Response {
        return response.status(200).json(request.body);
    }
}