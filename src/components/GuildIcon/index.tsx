import React from 'react';
import { Image } from 'react-native';

import { style } from './style';

export function GuildIcon() {
    const uri = 'https://gamerssuffice.com/wp-content/uploads/2019/11/How-to-add-bots-to-discord-500x405.jpg';

    return (
        <Image
            source={{ uri }}
            style={style.image}
            resizeMode="cover"
        />
    )

}