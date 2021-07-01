/*
 * This file is part of justoverclock/flarum-ext-emoticonpack.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */


import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';
import ReplaceEmoticons from './ReplaceEmoticons';

app.initializers.add('justoverclock/flarum-ext-emoticonpack', () => {
  extend(CommentPost.prototype, ['oncreate', 'onupdate'], ReplaceEmoticons);
});
