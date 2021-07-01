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

export default function () {

  const url = app.forum.attribute('baseUrl') + '/assets/extensions/justoverclock-emoticonpack/';

  let emoticons = {
    ':argh:': 'argh',
    ':blow:': 'blow',
    ':bad:': 'bad',
    ':beat:': 'beat',
    ':bee:': 'bee',
    ':beer:': 'beer',
    ':bike:': 'bike',
    ':blink:': 'blink',
    ':bot:': 'bot',
    ':bunny:': 'bunny',
    ':burger:': 'burger',
    ':cake:': 'cake',
    ':car:': 'car',
    ':center:': 'center',
    ':clap:': 'clap',
    ':coffee:': 'coffee',
    ':cold:': 'cold',
    ':copter:': 'copter',
    ':cow:': 'cow',
    ':cowboy:': 'cowboy',
    ':crazy:': 'crazy',
    ':cry:': 'cry',
    ':cup:': 'cup',
    ':devil:': 'devil',
    ':drum:': 'drum',
    ':drunk:': 'drunk',
    ':etciu:': 'etciu',
    ':fire:': 'fire',
    ':fish:': 'fish',
    ':fishing:': 'fishing',
    ':flu:': 'flu',
    ':frog:': 'frog',
    ':ghost:': 'ghost',
    ':glass:': 'glass',
    ':hot:': 'hot',
    ':joy:': 'joy',
    ':king:': 'king',
    ':kiss:': 'kiss',
    ':laugh:': 'laugh',
    ':lord:': 'lord',
    ':love:': 'love',
    ':missile:': 'missile',
    ':money:': 'money',
    ':money2:': 'money2',
    ':nerd:': 'nerd',
    ':nono:': 'nono',
    ':ok:': 'ok',
    ':omg:': 'omg',
    ':owl:': 'owl',
    ':pancake:': 'pancake',
    ':party:': 'party',
    ':photo:': 'photo',
    ':pig:': 'pig',
    ':pingu:': 'pingu',
    ':pistol:': 'pistol',
    ':police:': 'police',
    ':poo:': 'poo',
    ':rain:': 'rain',
    ':rofl:': 'rofl',
    ':sad:': 'sad',
    ':santa:': 'santa',
    ':sbav:': 'sbav',
    ':see:': 'see',
    ':sleep:': 'sleep',
    ':snake:': 'snake',
    ':snow:': 'snow',
    ':sshh:': 'sshh',
    ':star:': 'star',
    ':sun:': 'sun',
    ':throw:': 'throw',
    ':toast:': 'toast',
    ':tongue:': 'tongue',
    ':tornado:': 'tornado',
    ':uff:': 'uff',
    ':xmas:': 'xmas',
    ':zip:': 'zip',
    ':zombie:': 'zombie',
    ':alien:': 'alien',
    ':angel:': 'angel',
    ':upd:': 'upd',
    ':loveu:': 'loveu',
    ':hug:': 'hug',
    ':mumble:': 'mumble',
    ':yawn:': 'yawn',
    ':nose:': 'nose',
    ':fist:': 'fist',
    ':rock:': 'rock',
    ':finger:': 'finger',
    ':look:': 'look',
    ':doh:': 'doh',
    ':dog:': 'dog',
    ':uni:': 'uni',
    ':kang:': 'kang',
    ':sloth:': 'sloth',
    ':popcorn:': 'popcorn',
    ':golf:': 'golf',
    ':movie:': 'movie',
    ':plane:': 'plane',
    ':ufo:': 'ufo',
    ':island:': 'island',
    ':volcano:': 'volcano',
    ':alarm:': 'alarm',
    ':broken:': 'broken',
    ':warning:': 'warning',
    ':check:': 'check',
    ':clock:': 'clock',
  };

  mapIdsToPaths(emoticons, url, '', '');

  document.querySelectorAll('p').forEach((e) => (e.innerHTML = replaceEmoticons(e.innerHTML, emoticons)));

  function replaceEmoticons(text, emotes) {
    return Object.keys(emotes).reduce((result, emote) => {
      return result.replace(new RegExp(RegExpEscape(emote), 'gi'), function (match) {
        return ((img) => (img != null ? '<img src="' + img + '" class="emoticonpack"/>' : match))(emotes[match]);
      });
    }, text);
  }

  function RegExpEscape(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  }

  function mapIdsToPaths(emotes, url, prefix) {
    Object.keys(emotes).forEach((id) => {
      emotes[id] = url + prefix + emotes[id] + '.gif';
    });
  }
}
