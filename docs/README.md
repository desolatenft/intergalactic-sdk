# 🛠️ Intergalactic SDK
_version 0.1.0 "alpha centauri"_

Author: @desolatenft

The intergalactic SDK is a toolkit developed by the desolate.space team, that allows anyone to permisionlessly develop and add custom behaviors to 3D NFTs. With it, you can add simple behaviors (like jumping, or changing color) to your NFTs, or even complex ones (like a full AI character). But that is not all - the SDK is designed to be blockchain, metaverse and technology agnostic, as it aspires to become a universal standard for representing and reusing behaviors in any metaverse.

![](_media/bg.png)

## 💡 Motivation

There were three things we weren't content with:
1. Owners of Desolate NFTs wanted to develop rich functionality for their planets and NFTs, but they couldn't.
2. Millions of dev hours are spent developing videogames, metaverses and other 3D environments, but the behaviors developed for them are not reusable. All the development effort is lost when the game is over.
3. The metaverse is fragmented. There are many different blockchains, 3D engines, and metaverses. We want to create a standard that works across all of them.

This SDK is our attempt to solve these problems.

## 😵‍💫 But... Can you explain it like I'm 5? What can I do with the SDK?

* If you are a Desolate NFT holder: now, 3D NFTs in your planets can have custom behaviors. You can make your NFTs jump, change color, or even have a full AI character. You don't need to know how to code -- as long as someone develops one `trait`, you can add it to your NFTs from the planet editor.
* If you are a 3D asset creator: you can now add behaviors to your NFTs, making them more valuable over time. These behaviors will work on assets used in any of the 6,666 Desolate planets, and in the future, other 3D games and metaverses as well. Oh and you don't need to know how to code. Just add the behaviors in your NFT metadata.
* If you are a 3D or game dev: you can now develop behaviors that can be used in any 3D environment, and that can be reused across different metaverses. 
* If you are a metaverse developer: you can now support custom traits for objects inside your metaverse, without needing to write code for them yourself.

To get started with any of these, follow the guides on the left.

## 👩‍💻 About the SDK

This is a product and technical overview of the SDK, for those who want to go deep.

### Principles

1. Open: this SDK is based on and fully open source. Anyone can develop on top of it freely and without permission. Furthermore, it is not possible - by design - to build a trait that is not reusable by others. 
2. Composable: multiple traits can be mixed and matched and applied to any kind of object.
3. Powerful: traits can be as simple as jumping, or as complex as a full AI enbaled character

Non goals of this SDK, and left to the games / 3D environments / metaverses that use them are:
* Security: how to avoid malicious traits from performing unwanted actions
* Performance: resiliency against resource hogging by an individual trait
* Correctness: avoiding bugs or unwanted behaviors

### Components

The intergalactic SDK consists on three pieces:

1. Traits: programmable behaviors, described in javascript, that can be attached to 3D objects
2. Trait directory: a repository where traits can be published and downloaded. In the current version, this github repository acts as directory. In the future, it will be moved to a smart contract and the blockchain, to remove the reliance on a single repo.
3. NFT linkage standard: a standard to link NFTs to traits, so that they can be used in a 3D environment

## 1️⃣ Version 0.1.0 "alpha centauri"

To constrain scope, deliver value faster, and be more flexible iterating, v0.1.0 of the SDK is limited to the following:
* Blockchain: Solana
* Environment: A-frame v 1.3.0 (which desolates runs on)
* Language: Javascript

## 🚀 Future work

Development of the SDK will be done by and for the community, which should prioritize whatever it deems most valuable.

The authors of its initial spec believe the following list of ideas may be worth considering:

* Develop a taxonomy of higher level subjects and behaviors, and a language around them, that allows the writing of 
  traits that can be compiled to any environment, language and version.
* Develop rules and guidelines for security, performance and correctness.
* Support for other blockchains, 3D engines and metaverses.
