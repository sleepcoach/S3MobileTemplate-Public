import React, { Component } from 'react';

const getPatientProfile = () => Promise.resolve();
const getOrders = () => Promise.resolve();

const DataContext = React.createContext();

export const withDataProvider = Component => props => {
  return (
    <DataContext.Consumer>
      {context => <Component {...props} context={context} />}
    </DataContext.Consumer>
  );
};

export class SharedProvider extends Component {
  state = {
    orders: [],
    isFetchingOrders: false,
    patientProfile: {},
    isFetchingProfile: false,
  };

  fetchOrders = async () => {
    this.setState({ isFetchingOrders: true });
    try {
      const { orders } = await getOrders();
      this.setState({ orders, isFetchingOrders: false });
    } catch (error) {
      this.setState({ isFetchingOrders: true });
    }
  };

  fetchProfile = async () => {
    this.setState({ isFetchingProfile: true });
    try {
      const patientProfile = await getPatientProfile();
      this.setState({ patientProfile, isFetchingProfile: false });
    } catch (error) {
      this.setState({ isFetchingProfile: false });
    }
  };

  render() {
    const { children } = this.props;
    return (
      <DataContext.Provider
        value={{
          ...this.state,
          fetchOrders: this.fetchOrders,
          fetchProfile: this.fetchProfile,
        }}>
        {children}
      </DataContext.Provider>
    );
  }
}
