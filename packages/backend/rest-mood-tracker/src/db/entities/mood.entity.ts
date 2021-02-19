import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

import { UserEntity } from 'src/db/entities/user.entity';

export enum MoodStatus {
  Relaxed = 'relaxed',
  Motivated = 'motivated',
  Energetic = 'energetic',
  Curious = 'curious',
  Confident = 'confident'
}

export enum Intensity {
  Level0,
  Level1,
  Level2,
  Level3,
  Level4,
}

@Entity()
export class MoodEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => UserEntity, user => user.uuid)
  userId: string;

  @Column({
    type: 'enum',
    enum: MoodStatus,
    default: MoodStatus.Relaxed,
  })
  status: MoodStatus;

  @Column({
    type: 'enum',
    enum: Intensity,
    default: Intensity.Level0,
  })
  intensity: Intensity;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @Column()
  enteredAt: string;
}
