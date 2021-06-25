import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { style } from './style';
import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { ListDivider } from '../../components/ListDivisor';
import { Appointment } from '../../components/Appointment';

export function Home() {
    const [category, setCategory] = useState('');
    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: false
            },
            category: '1',
            date: '23/06 às 10:30h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },

    ];

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    return (
        <View>
            <View style={style.header}>
                <Profile />
                <ButtonAdd />
            </View>
            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelect}
            />

            <View style={style.content}>
                <ListHeader
                    title="Partidas agendadas"
                    subtitle="Total 6"
                />
            </View>

            <FlatList
                data={appointments}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Appointment data={item} />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                style={style.matches}
                showsVerticalScrollIndicator={false}

            />
        </View >
    );
}


// import React, { useState } from 'react';
// import { View, FlatList } from 'react-native';

// export function Home() {


//     return (
//         <View>
//             <View style={styles.header}>
//                 <Profile />
//                 <ButtonAdd />
//             </View>

//             <CategorySelect
//                 categorySelected={category}
//                 setCategory={handleCategorySelect}
//             />

//             <View style={styles.content}>
//                 <ListHeader
//                     title="Partidas agendadas"
//                     subtitle="Total 6"
//                 />

//                 <FlatList
//                     data={appointments}
//                     keyExtractor={item => item.id}
//                     renderItem={({ item }) => (
//                         <Appointment data={item} />
//                     )}
//                     ItemSeparatorComponent={() => <ListDivider />}
//                     style={styles.matches}
//                     showsVerticalScrollIndicator={false}
//                 />
//             </View>
//         </View>
//     );
// }