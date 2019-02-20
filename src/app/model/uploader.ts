
import { UploadQueue } from '../model/uploadqueue';

export class Uploader {
  queue: UploadQueue[];

  constructor() {
    this.queue = [];
  }
}
