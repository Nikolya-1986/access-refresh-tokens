/* eslint-disable prettier/prettier */
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

import { Comment } from 'src/entities/comment.entity';
import { Topic } from 'src/entities/topic.entity';
import { User } from 'src/entities/user.entity';


const config: MysqlConnectionOptions = {
  type: 'mysql',
  database: 'access_refresh_tokens',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'randomrootpassword',
  entities: [User, Topic, Comment],
  synchronize: true,
};

export default config;