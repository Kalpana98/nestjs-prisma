import { Injectable } from '@nestjs/common';
import { TweetsRepository } from './tweets.repository';
import { Tweet, User } from '@prisma/client';

@Injectable()
export class TweetsService {
	constructor(private repository: TweetsRepository) {}

	async createTweet(params: { content: Tweet[`content`]; userId: User[`id`] }) {
		const { content, userId } = params;
		const tweet = await this.repository.createTweet({
			data: {
				content,
				user: {
					connect: {
						id: userId,
					},
				},
			},
		});
		return tweet;
	}

	async getTweets() {
		const tweets = await this.repository.getTweets({});
		return tweets;
	}

	async updateTweet(params: { id: Tweet[`id`]; content: Tweet[`content`]; userId: User[`id`] }) {
		const { id, content, userId } = params;
		const tweet = await this.repository.updateTweet({
			where: { id },
			data: {
				content,
				user: {
					connect: {
						id: userId,
					},
				},
			},
		});
		return tweet;
	}

	async deleteTweet(params: { id: Tweet[`id`] }) {
		const { id } = params;
		const tweet = await this.repository.deleteTweet({
			where: { id },
		});
		return tweet;
	}
}
