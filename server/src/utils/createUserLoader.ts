import DataLoader from "dataloader";
import { User } from "../entities/User";

// keys: [1, 78, 8, 9]
// [{id: 1, username: 'tim'}, {}, {}, {}]
// timestamps 11:16:52
export const createUserLoader = () =>
  new DataLoader<number, User>(async (userIds) => {
    const users = await User.findByIds(userIds as number[]);
    const userIdToUser: Record<number, User> = {};
    users.forEach((user) => {
      userIdToUser[user.id] = user;
    });

    return userIds.map((userId) => userIdToUser[userId]);
  });
