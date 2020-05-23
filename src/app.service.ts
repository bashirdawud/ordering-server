import { Injectable} from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';


@Injectable()
export class AppService {
  
  constructor(@InjectKnex() private readonly knex: Knex) {}

  
  async getOrders() {
    if (!(await this.knex.schema.hasTable('order'))) {
      try{
          await this.knex.schema.createTable('order', table => {
            table.increments('id').primary();
            table.string('name');
            table.integer('quantity');
            table.integer("price")      
          
          });
          await this.knex.table('order').insert({ name: 'Shirt', quantity: 2, price: 300  });
          const users = await this.knex.table('order');
        return   users
      }catch(err){
        console.log(err)
      }
    }
     
    
   
  }

  
        async createOrder(body) {
          await this.knex.table('order').insert(body);
          const users = await this.knex.table('order');
          return 'Saved to DB';
        }
        async findOne(id) { 
          console.log(id)   
          const orders = this.knex.table('order').where({ id : id });
          return orders;
        }

        async findOneandUpdate(id) { 
          console.log(id)   
          const orders = this.knex.table('order').where({ id : id });
          return orders;
        }

        async findOneandDelete(id) { 
          console.log(id)   
          const orders = this.knex.table('order').where({ id : id });
          return orders;
        }

        


      }


