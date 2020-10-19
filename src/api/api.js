import * as faker from 'faker';
import { nanoid } from 'nanoid';

export const api = {
  currentUser: "Lucas Padden",
  users: ["John Doe", "Jane Doe", "Jim Doe", "Jerry Doe", "Jill Doe"],
  fetchChats: function() {
    const chats = [
      {
        id: nanoid(),
        messages: [
          { id: nanoid(), text: faker.lorem.text(), sentAt: faker.time.recent(), sentBy: "John Doe" },
          { id: nanoid(), text: faker.lorem.text(), sentAt: faker.time.recent(), sentBy: "John Doe" },
          { id: nanoid(), text: faker.lorem.text(), sentAt: faker.time.recent(), sentBy: "John Doe" },
          { id: nanoid(), text: faker.lorem.text(), sentAt: faker.time.recent(), sentBy: "John Doe" },
        ],
        recipients: [this.currentUser, "John Doe"],
        avatar: faker.image.avatar(),
        alt: "G"
      },
      {
        id: nanoid(),
        messages: [
          { id: nanoid(), text: faker.lorem.text(), sentAt: faker.time.recent(), sentBy: "Jane Doe" },
          { id: nanoid(), text: faker.lorem.text(), sentAt: faker.time.recent(), sentBy: "Jane Doe" },
          { id: nanoid(), text: faker.lorem.text(), sentAt: faker.time.recent(), sentBy: "Jane Doe" },
          { id: nanoid(), text: faker.lorem.text(), sentAt: faker.time.recent(), sentBy: "Jane Doe" },
        ],
        recipients: [this.currentUser, "Jane Doe"],
        avatar: faker.image.avatar(),
        alt: "G"
      },
      {
        id: nanoid(),
        messages: [
          { id: nanoid(), text: faker.lorem.text(), sentAt: faker.time.recent(), sentBy: "Jill Doe" },
          { id: nanoid(), text: faker.lorem.text(), sentAt: faker.time.recent(), sentBy: "Jill Doe" },
          { id: nanoid(), text: faker.lorem.text(), sentAt: faker.time.recent(), sentBy: "Jill Doe" },
          { id: nanoid(), text: faker.lorem.text(), sentAt: faker.time.recent(), sentBy: "Jill Doe" },
        ],
        recipients: [this.currentUser, "Jill"],
        avatar: faker.image.avatar(),
        alt: "G"
      },
      {
        id: nanoid(),
        messages: [
          { id: nanoid(), text: faker.lorem.text(), sentAt: faker.time.recent(), sentBy: "Jim Doe" },
          { id: nanoid(), text: faker.lorem.text(), sentAt: faker.time.recent(), sentBy: "Jim Doe" },
          { id: nanoid(), text: faker.lorem.text(), sentAt: faker.time.recent(), sentBy: "Jim Doe" },
          { id: nanoid(), text: faker.lorem.text(), sentAt: faker.time.recent(), sentBy: "Jim Doe" },
        ],
        recipients: [this.currentUser, "Jim"],
        avatar: faker.image.avatar(),
        alt: "G"
      },
      {
        id: nanoid(),
        messages: [
          { id: nanoid(), text: faker.lorem.text(), sentAt: faker.time.recent(), sentBy: "Jerry Doe" },
          { id: nanoid(), text: faker.lorem.text(), sentAt: faker.time.recent(), sentBy: "Jerry Doe" },
          { id: nanoid(), text: faker.lorem.text(), sentAt: faker.time.recent(), sentBy: "Jerry Doe" },
          { id: nanoid(), text: faker.lorem.text(), sentAt: faker.time.recent(), sentBy: "Jerry Doe" },
        ],
        recipients: [this.currentUser, "Jerry Doe"],
        avatar: faker.image.avatar(),
        alt: "G"
      },
    ]
    return chats;
  }
}

