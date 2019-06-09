# D-Media: Decentralized Social Media

Joined a social media platform where content is not managed by a single entity, but the whole community. We implement a peer to peer reviewing system that maintains quality of content, while giving incentives to the users. We also aim to keep it as a no-ads social media as long as possible. Incentives are tied to our native token, **D-Media Coin**.

The review process is as such:

_Pay tokens to submit post->_

_Reviewer reviews post->_

_Post sent to public->_

_Reviewer and Poster rewarded according to public votes_

##### This project is a submission for Decrypt Tokyo 2019 : https://decrypt.tokyo/
## Stack Used
- Vue.js & Nuxt.js (front-end)
- MongoDB (off-chain database)
- Uniqys Kit (connection to ethereum)


## How the Ecosystem Runs
We will break down how we envision this app being deployed in three parts.
### Bootstrapping 
The bootstrapping effort has two parts: Airdropping and IEO.
We will use twitter as a reference and pick 5000 verified users that have a reputation for posting good, interesting content. They will be able to post on D-Media immediately using these tokens. The incentive for others to buy the token from an IEO is to be on the post feed with these verified users, giving them a chance to be famous on our new platform. The IEO amount will be half of what we distribute to the verified twitter users. The organization deploying this app should also keep some tokens so they have some funds to maintain the off-chain assets in the future.
### Incentives and Maintaining the Ecosystem
Tokens are mined in three different ways:
- Voting on public posts
- Reviewing and accepting appropriate content
- getting good votes on a post

It is a sort of proof of activeness, as long as you are an active member of the platform, you should be able to gain tokens.
Tokens can be used to post on the patform and this price will be adjusted with time to maintain a healthy userbase.
The parameters that should be tuned throughout are the rewards for each of the three rewarding methods we highlighted, and the price for posting, as well as the threshhold for having reviewing permission. The number of reviewers necessary to accept a post to be submitted to the public is also something that may change. All these cinfigurations are not set-in-stone yet.
### Other Considerations
Being a decentralized application, we try to let the community choose how this platform will behave. Therefore, we believe that we want to provide a platform with no ads! The hope is to fine-tune the above mentioned parameters so that social media influencers can make a living without the need of sponsored content that we see in all centralized social media platforms today.

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
