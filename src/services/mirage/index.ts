import { createServer, Factory, Model, Response } from 'miragejs'
import faker from 'faker'

type User = {
    name: string;
    email: string,
    created_at: string;
}

export function makeServer() {
    const server = createServer({

        models: {
            user: Model.extend<Partial<User>>({})
        },

        factories: {
            user: Factory.extend({
                name(i: number) {
                    return `User ${i + 1}`
                },

                email() {
                    return faker.internet.email().toLowerCase()
                },

                created_at() {
                    return faker.date.recent(10) // Vai criar datas recentes dos últimos 10 dias
                },
            })
        },

        seeds(server) {
            server.createList('user', 200) // Criando meu factory de user com 10 users
        },

        routes() {
            this.namespace = "api"
            this.timing = 750 //Toda chamada que eu fizer para a API do Mirage vai demorar 750MS bom para testar o loading da APP

            this.get("/users", function(schema, request) {
                
                const { page = 1, per_page = 10 } = request.queryParams

                const total = schema.all('user').length

                const pageStart = (Number(page) - 1 )
                const pageEnd = pageStart + Number(per_page)

                const users = this.serialize(schema.all('user'))
                              .users.slice(pageStart, pageEnd)

                return new Response(
                    200,
                    { 'x-total-count': String(total) },
                    { users }
                )
            })

            this.get("/users/:id")
            this.post("/users")

            this.namespace = ''
            this.passthrough()
        }
    })

    return server
}