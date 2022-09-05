/*
 * @Author: tohsaka888
 * @Date: 2022-09-05 10:40:17
 * @LastEditors: tohsaka888
 * @LastEditTime: 2022-09-05 10:45:40
 * @Description: 请填写简介
 */

import jwt from 'jsonwebtoken'
import { ObjectId } from 'mongodb';

type Props = {
  admin: Admin.Admin;
  id: ObjectId | null;
}

export function generateAccessToken({ admin, id }: Props) {
  return jwt.sign({ ...admin, id }, process.env.secret || '', { expiresIn: '30d' });
}