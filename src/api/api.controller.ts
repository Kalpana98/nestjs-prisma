import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { TweetsService } from 'src/modules/tweets/tweets.service';

@Controller('api')
export class ApiController {
	constructor(private readonly tweetsService: TweetsService) {}

	@Post(`tweet`)
	async createTweet(@Body() data: { content: string; userId: string }) {
		const { content, userId } = data;
		return this.tweetsService.createTweet({
			content,
			userId: Number(userId),
		});
	}

	@Get('tweets')
	getTweets() {
		return this.tweetsService.getTweets();
	}

	@Patch('tweet')
	async updateTweet(@Body() data: { id: string; content: string; userId: string }) {
		const { id, content, userId } = data;
		return this.tweetsService.updateTweet({
			id: Number(id),
			content,
			userId: Number(userId),
		});
	}

	@Delete('tweet')
	async deleteTweet(@Body() data: { id: string }) {
		const { id } = data;
		return this.tweetsService.deleteTweet({
			id: Number(id),
		});
	}
}
