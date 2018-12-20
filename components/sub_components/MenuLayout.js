import React, {Component} from 'react';
import { View, Text } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { Card } from 'react-native-elements';

class MenuLayout extends Component {
    _menu = null;

    setMenuRef = ref => {
        this._menu = ref;
    };

    hideMenu = () => {
        this._menu.hide();
    };

    showMenu = () => {
        this._menu.show();
    };
    render() {

        return (
            <Card containerStyle={{ flex: 0.4 }}>
              {/*  <Menu
                    ref={this.setMenuRef}
                    button={<Text onPress={this.showMenu}>장비 선택</Text>}
                >
                    <MenuItem onPress={this.hideMenu}>장비 1</MenuItem>
                    <MenuItem onPress={this.hideMenu}>장비 2</MenuItem>
                    <MenuItem onPress={this.hideMenu}>
                        장비 3
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem onPress={this.hideMenu}>장비 4</MenuItem>
                </Menu>*/}
            </Card>
        );
    }
}

export default MenuLayout;
