import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

import { AppModule } from './app.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    app.setGlobalPrefix('api')

    const options = new DocumentBuilder()
        .setTitle('Budget-app')
        .setDescription('The budget-app API description')
        .setVersion('1.0')
        .addTag('budget-app')
        .build()
    const document = SwaggerModule.createDocument(app, options)
    SwaggerModule.setup('api', app, document)

    await app.listen(process.env.PORT || 4000)
}

setTimeout(async () => await bootstrap(), 5000)
