import { Controller, Get, Post, Res, HttpStatus,Param, Put, Delete, Body } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { AppService } from 'src/app.service';
import { get } from 'http';
import { Response } from 'express';
 

@Controller('ordering')
export class OrderingController {
    users = []
    constructor(private appService : AppService){
            
    }
    
    @Post('insertOrder')
    create(@Res() res: Response, @Body() body: Body){
        this.appService.createOrder(body).then((order) => {
            console.log(order)
            res.status(HttpStatus.OK).json({status: true, message: 'order created', order : order})
        })
    }
    @Get('getAllOrders')
    findAll(@Res() res: Response){
        this.appService.getOrders().then((order) =>{
            console.log(order)
            res.status(HttpStatus.OK).json({status: true, message: 'Order found', order: order})

        })
    }

    @Get(':id')
    findOne(@Res() res: Response, @Param('id') id: string){
        console.log(id)
        this.appService.findOne(id).then((order) =>{
            console.log(order)
            res.status(HttpStatus.OK).json({status: true, message: 'data found', order: order})

        })
    }

    @Put(':id/update')
    update(@Res() res: Response, @Param('id') id: string, @Body() body: Body){
        console.log(id)
        this.appService.findOneandUpdate(id).then((order) =>{
            console.log(order)
            res.status(HttpStatus.OK).json({status: true, message: 'data found', order: order})

        })
    }


    @Delete(':id/delete')
    remove(@Res() res: Response, @Param('id') id: string, @Body() body : Body ){
        console.log(id)
        this.appService.findOneandDelete(id).then((order) =>{
            console.log(order)
            res.status(HttpStatus.OK).json({status: true, message: 'order deleted', order:order})

        })
    }

}
