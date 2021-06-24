import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import { style } from './style';
import { Profile } from '../../components/Profile'

export function Home() {

    return (
        <View>
            <View style={style.header}>
                <Profile />
            </View>
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