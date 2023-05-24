import { Column, Index, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'posts',
})
export class Post extends Model<Post> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Index
  userId: number;

  @Column
  title: string;

  @Column
  body: string;

  @Column
  image: string;
}
