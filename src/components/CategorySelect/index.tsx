import React from 'react';
import { ScrollView } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { style } from './style';
import { categories } from '../../utils/categories';

import { Category } from '../Category';

type Props = {
    categorySelected: string;
    hasChacked?: boolean;
    setCategory: (categoryId: string) => void;
}

export function CategorySelect({
    categorySelected,
    hasChacked = false,
    setCategory
}: Props) {

    return (
        <ScrollView
            horizontal
            style={style.container}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
        >
            {
                categories.map(category => (
                    <Category
                        key={category.id}
                        title={category.title}
                        icon={category.icon}
                        checked={category.id === categorySelected}
                        onPress={() => setCategory(category.id)}
                        hasCheckBox={hasChacked}
                    />
                ))
            }
        </ScrollView>
    );
}