import img1 from '@assets/images/cards-component/1-mad-max.jpg';
import img2 from '@assets/images/cards-component/2-spider-man.jpg';
import img3 from '@assets/images/cards-component/3-boyhood.jpg';
import img4 from '@assets/images/cards-component/4-get-out.jpg';
import img5 from '@assets/images/cards-component/5-lady-bird.jpg';
import img6 from '@assets/images/cards-component/6-the-favourite.jpg';
import img7 from '@assets/images/cards-component/7-roma.jpg';
import img8 from '@assets/images/cards-component/8-black-panther.jpg';
import img9 from '@assets/images/cards-component/9-ex-machina.jpg';
import img10 from '@assets/images/cards-component/10-the-master.jpg';
import img11 from '@assets/images/cards-component/11-her.jpg';
import img12 from '@assets/images/cards-component/12-moonlight.jpg';
import img13 from '@assets/images/cards-component/13-the-social-network.jpg';
import img14 from '@assets/images/cards-component/14-drive.jpg';
import img15 from '@assets/images/cards-component/15-avengers.jpg';

export interface ICard {
  img: string;
  studio: string;
  name: string;
  description: string;
}

export const cardsData: ICard[] = [
  {
    img: img1,
    studio: 'Warner Bros',
    description: 'We start at the top with a movie that did not win the Best Picture Oscar like many thought it would in 2016. But listen, George Miller\'s fourth in the Mad Max series careens on as one of the best action movies of all time. Tom Hardy replaces Mel Gibson as the enigmatic Max, alongside the clear standout and heart of the film: Charlize Theron as the one-armed Imperator Furiosa. In Miller\'s visionary post-apocalyptic Oz, they attempt to save "the wives," women selected for breeding, from the tyrannical Immortan Joe. The entire movie takes place over one absolutely bonkers chase sequence. Its cinematic stats are jaw-dropping: Miller used 3,500 storyboards and took 480 hours of raw footage. He overcame a decade of roadblocks -- recasting, location changes and creative resets (he explored the possibility of a 3D live-action version) -- before achieving high-octane imaginative insanity.',
    name: 'Mad Max: Fury Road (2015)'
  },
  {
    img: img2,
    studio: 'Sony Pictures Animation',
    description: 'There was no question what movie would win the Best Animated Feature category at the 2018 Oscars. Into the Spider-Verse stole our hearts by boldly ignoring the fact we\'ve had three cinematic Peter Parkers and introducing five more. They stem from Marvel\'s multiverse, wisely made less complicated by producers Phil Lord and Christopher Miller, who focus on the Miles Morales (Shameik Moore) graffiti artist, hip hop-appreciating version of Spidey. Morales teams up with the versions from other universes -- including a bizarre and completely hilarious cartoon pig known as Peter Porker -- to fight supervillain Kingpin. Over 140 animators combined computer animation with a hand-drawn style to mimic a comic book look. Inventive visuals, fresh storytelling and embracing the comic books\' wackiness helped make the first non-white Spider-Man one of the best.',
    name: 'Spider-Man: Into the Spider-Verse (2018)'
  },
  {
    img: img3,
    studio: 'IFC Films',
    description: 'Boyhood is, logistically speaking, a bit of a miracle. In order to tell a story about growing up, Richard Linklater sporadically filmed a young Ellar Coltrane every year for 12 years, from ages 6 to 18. His character, Mason, lived between his divorced parents (Ethan Hawke and Patricia Arquette) in Texas. The project flirted with potential film-ending pitfalls: For one, what if a teenage Coltrane strayed from acting? But Linklater delivered his best ever film. It won BAFTAs, Golden Globes and a Best Supporting Actress Oscar for Arquette in 2014. Yet some still feel a little salty about Boyhood\'s award season. Boyhood lost the Best Picture Oscar to Birdman, a less warm, familiarly wholesome tale, more a technical and existential tour de force. On this occasion, the people have spoken.',
    name: 'Boyhood (2014)'
  },
  {
    img: img4,
    studio: 'Universal Pictures',
    description: 'Get Out is the modern horror movie. It\'s the perfect coming together of horror, comedy and satire on racism. The setup to the punch line -- or in horror\'s case, the jump scare -- takes exact timing. As one half of comedy duo Key & Peele, Jordan Peele is extremely well-equipped to achieve both. His directorial debut has a scarily loaded setup: a young black man (Daniel Kaluuya) meets his white girlfriend\'s (Alison Williams) middle-class liberal parents. Their comments about how fine they are with their daughter\'s boyfriend are comedy gold... with a delayed squirm. Peele\'s exciting new voice brought horror, laughs and deeply unsettling self-reflection.',
    name: 'Get Out (2017)'
  },
  {
    img: img5,
    studio: 'IAC Films',
    description: 'On paper, Lady Bird reads like a conventional coming-of-age story. It covers the usual milestones: losing virginity, going to prom, graduation. But in between those lines is a raw, specific relationship between 17-year-old Christine McPherson (Saoirse Ronan), who insists everyone calls her Lady Bird, and her hard working and barely appreciated mother Marion (Laurie Metcalf). First-time solo director Greta Gerwig writes a love letter to her hometown, Sacramento, infusing it with brilliantly layered comedy. "I wish I could live through something," Lady Bird says with the narcissism of a 17-year-old. She\'s self-titled, as in, she says Lady Bird is the name "given to me by me." The warmth, hilarity and at times confronting revelations of teenagehood flood through Gerwig\'s singular lens.',
    name: 'Lady Bird (2017)'
  },
  {
    img: img6,
    studio: 'Fox Searchlight Pictures',
    description: 'Olivia Coleman, Rachel Weisz and Emma Stone bring the kind of acting calibre you expect to this Yorgos Lanthimos misadventure. The Greek director well and truly established his distinctive weird, experimental style with The Lobster and The Killing of a Sacred Deer. He loves to cross a line and does so multiple times in The Favourite, a period piece turned cat-and-mouse psychological thriller featuring characters named Wanking Man and Nude Pomegranate Tory. Underneath the politics and the corsets, you\'ll even find a melancholy love story.',
    name: 'The Favourite (2018)'
  },
  {
    img: img7,
    studio: 'Netflix',
    description: 'Watching Alfonso Cuaron\'s Roma is almost like flipping through a beautifully-shot album of 1970s Mexico. Cuaron tells a semi-autobiographical story about a middle class family through the lens of a young housekeeper. It\'s a story about people living, brought to life by Cuaron\'s deft magic.',
    name: 'Roma (2018)'
  },
  {
    img: img8,
    studio: 'Marvel Studios',
    description: 'Marvel movies proved they could keep on evolving with Ryan Coogler\'s Black Panther. The 2018 film bucked the superhero formula with its Afro-futurist setting, family saga and James Bond gadgetry. The bold claws of an auteur are all over this comic book blockbuster.\n',
    name: 'Black Panther (2018)'
  },
  {
    img: img9,
    studio: 'A24',
    description: 'The walls meticulously close in on the programmer, his boss and the iRobot they interact with in Alex Garland\'s Ex Machina. The tense, thoughtful sci-fi set in a remote cutting-edge cabin raises big questions and upgraded Alicia Vikander to even greater star status.\n',
    name: 'Ex Machina (2015)'
  },
  {
    img: img10,
    studio: 'The Weinstein Company',
    description: 'The Master was not the deep-dive into Scientology\'s origins many might have expected. Paul Thomas Anderson sews together the fictional life of Lancaster Dodd (Philip Seymour Hoffman), leader of a religious movement known as "The Cause," and his tension with the yin to his yang, Freddie Quell (Joaquin Phoenix). The 2012 character drama, dealing with a world recovering from World War II, is a poetic epic.',
    name: 'The Master (2012)'
  },
  {
    img: img11,
    studio: 'Warner Bros',
    description: 'Spike Jonze\'s 2013 romance between a lonely man and his Siri-like AI is even more frighteningly relevant today. Samantha (Scarlet Johansson) is the soothing, intimate voice in Theodore Twombly\'s (Joaquin Phoenix) ear, but the bounds of her programming soon go beyond sprucely organizing his life. Jonze\'s future is both vividly-realized and always rooted in the complexities of the human heart.',
    name: 'Her (2013)'
  },
  {
    img: img12,
    studio: 'A24',
    description: 'Barry Jenkins\' three-part story about a physically and emotionally abused black man has been described as genre-defying. From childhood to adulthood, three actors (Trevante Rhodes, Ashton Sanders and Alex Hibbert) play Chiron with soulful naturalness. In covering difficult subject matter, from the drug underworld to sexual identity, Moonlight runs deep. The 2016 Best Picture Oscar winner is gorgeous to look at and accompanied by an exquisite soundtrack.',
    name: 'Moonlight (2016)'
  },
  {
    img: img13,
    studio: 'Merrick Morton',
    description: 'David Fincher and Aaron Sorkin friended each other to make a powerfully nerdy, talky movie about Mark Zuckerberg and the inception of Facebook. Equally absorbing are its themes of friendship and loyalty in a playground of petty politics. A superb Jesse Eisenberg as the insensitive, conflicted genius was a revelatory match for Fincher\'s technical talent.\n',
    name: 'The Social Network (2010)'
  },
  {
    img: img14,
    studio: 'FilmDistrict',
    description: 'Ryan Gosling\'s strong, silent Hollywood stunt driver moonlights as a getaway driver. So Drive is basically the coolest movie ever. Its dreamlike, electronic soundtrack -- perfect for travel at night -- layers meaningful messages into a violent fairy tale about an unconventional hero.',
    name: 'Drive (2011)'
  },
  {
    img: img15,
    studio: 'Marvel Studios',
    description: 'The sheer size of this blockbuster, with its sky-high budget, A-listers and ravenous fandom, make Anthony and Joe Russo\'s film all the more impressive. To culminate 20 Marvel films in a two-part showstopper is experimental madness on its own. But to end (spoiler) the first of those parts with almost all your heroes losing... who says all superhero films are predictable?',
    name: 'Avengers: Infinity War (2018)'
  }
];
