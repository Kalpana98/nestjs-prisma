import { Module } from '@nestjs/common';
import { TweetsModule } from './modules/tweets/tweets.module';
import { ApiModule } from './api/api.module';

@Module({
	imports: [TweetsModule, ApiModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
