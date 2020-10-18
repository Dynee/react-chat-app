/* 
    Defines a mock conversation api for the projects
*/
import * as faker from 'faker';
import { nanoid } from 'nanoid';

export const api = {
    userId: nanoid(),
    userAvatar: faker.image.avatar(),
    username: 'Lucas Padden',
    getFirstLastInitial: function(fullname) {
        const firstInitial = fullname.split(' ')[0].substring(0, 1);
        const firstLastInitial = fullname.split(' ')[1].substring(0, 1);
        return firstInitial + firstLastInitial.toUpperCase();
    },
    fetchConversations: function() {
        // normally would have api code here but will just return data
        // by using the faker library
        
        // User conversations (2)
        const date = new Date();
        const userConversations = [
            {
                id: nanoid(),
                messages: [
                  { message: faker.lorem.sentence(), name: this.getFirstLastInitial('Jane Doe'), timestamp: `Today at ${date.getHours()}:${date.getMinutes()}` },
                  { message: faker.lorem.sentence(), name: this.getFirstLastInitial('Lucas Padden'), timestamp: `Today at ${date.getHours()}:${date.getMinutes()}` },
                ],
                recipients: [
                  {
                    id: nanoid(),
                    name: 'Jane Doe',
                    avatar: faker.image.avatar()
                  },
                  {
                    id: this.userId,
                    name: 'Lucas Padden',
                    avatar: this.userAvatar
                  }
                ],
            },
            {
                id: nanoid(),
                messages: [
                  { message: faker.lorem.sentence(), name: this.getFirstLastInitial('Jane Doe'), timestamp: `Today at ${date.getHours()}:${date.getMinutes()}` },
                  { message: faker.lorem.sentence(), name: this.getFirstLastInitial('Lucas Padden'), timestamp: `Today at ${date.getHours()}:${date.getMinutes()}` },
                ],
                recipients: [
                  {
                    id: 'CtS0iOcDHYZ1fudK78qgG',
                    name: 'John Doe',
                    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/canapud/128.jpg'
                  },
                  {
                    id: this.userId,
                    name: 'Lucas Padden',
                    avatar: this.userAvatar
                  }
                ],
            },
        ]
        return userConversations;
    },
    fetchUsers: function() {
        const users = [
            {
              id: 'CtS0iOcDHYZ1fudK78qgG',
              avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/canapud/128.jpg',
              name: 'John Doe'
            },
            {
              id: '5y8obqg7p7jGqqNPnci2y',
              avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/cocolero/128.jpg',
              name: 'Ricky Bobby'
            },
            {
              id: 'QtS0ZOcrHYZ1fudK78qgG',
              avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/angelcolberg/128.jpg',
              name: 'Alan Turing'
            },

        ];
        return users;
    }
}
