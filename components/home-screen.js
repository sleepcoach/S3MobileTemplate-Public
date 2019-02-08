import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { colors } from '../common_styles';
import { Feather } from '@expo/vector-icons';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Image,
} from 'react-native';
import { withDataProvider } from './shared/data-provider';
import { StackActions, NavigationActions } from 'react-navigation';
import isEmpty from 'lodash/isEmpty';

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Login' })],
});

const ICON_SIZE = 40;

class HomeScreen extends Component {
  static navigationOptions = () => ({
    title: 'Home',
    headerLeft: null,
  });

  static propTypes = {
    navigation: PropTypes.object,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={[styles.s3Green, styles.orderBox]}
          underlayColor={colors.lightGrey}
          onPress={() => navigate('OrderSupplies')}>
          <View style={[styles.iconContainer]}>
            <View>
              <Feather name="shopping-cart" size={75} style={styles.icon} />
              <Text style={styles.text}>Order Supplies</Text>
            </View>
          </View>
        </TouchableHighlight>

        <View style={[styles.row]}>
          <TouchableHighlight
            style={[styles.box, styles.s3Green]}
            onPress={() => navigate('Patient')}
            underlayColor={colors.lightGrey}>
            <View style={[styles.iconContainer]}>
              <View>
                <Feather name="user" size={ICON_SIZE} style={styles.icon} />
                <Text style={styles.text}>Profile</Text>
              </View>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={[styles.box, styles.s3Green]}
            onPress={() => navigate('Orders')}
            underlayColor={colors.lightGrey}>
            <View style={[styles.iconContainer]}>
              <View>
                <Feather name="package" size={ICON_SIZE} style={styles.icon} />
                <Text style={styles.text}>My Orders</Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.row}>
          <TouchableHighlight
            style={[styles.box, styles.s3Green]}
            underlayColor={colors.lightGrey}
            onPress={() => navigate('RequestContact')}>
            <View style={[styles.iconContainer]}>
              <Feather name="calendar" size={ICON_SIZE} style={styles.icon} />
              <Text style={styles.text}>Schedule a Call</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={[styles.box, styles.s3Green]}
            underlayColor={colors.lightGrey}
            onPress={() => navigate('KnowledgeBase')}>
            <View style={[styles.iconContainer]}>
              <Feather name="info" size={ICON_SIZE} style={styles.icon} />
              <Text style={styles.text}>Information</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.row}>
          <TouchableHighlight
            style={[styles.logoutBox, styles.s3Green]}
            underlayColor={colors.lightGrey}>
            <View style={[styles.iconContainer]}>
              <Feather name="log-out" size={28} style={styles.logoutIcon} />
              <Text style={styles.logoutText}>Log Out</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default withDataProvider(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 120,
    borderRadius: 10,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  orderBox: {
    flex: 2,
    borderRadius: 10,
    marginHorizontal: 15,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutBox: {
    flex: 2,
    height: 75,
    // width: 300,
    borderRadius: 10,
    marginHorizontal: 5,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    // alignItems: "center",
    // justifyContent: "center",
    // paddingTop: 20
  },
  icon: {
    color: colors.lightGrey,
    paddingBottom: 5,
    alignSelf: 'center',
  },
  logoutIcon: {
    color: colors.lightGrey,
    alignSelf: 'center',
  },
  text: {
    color: colors.lightGrey,
    marginTop: 5,
    // paddingTop: 10,
    fontSize: 13,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  logoutText: {
    color: colors.lightGrey,
    marginTop: 2,
    paddingTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  s3Green: {
    backgroundColor: colors.s3Turquoise,
  },
  s3Blue: {
    backgroundColor: colors.s3Blue,
  },
});
