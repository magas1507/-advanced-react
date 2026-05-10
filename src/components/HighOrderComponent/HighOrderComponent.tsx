import React from "react";

function withLoading<T extends object>(Component: React.ComponentType<T>) {
  return (props: T & { isLoading: boolean }) => {
    const { isLoading, ...rest } = props
    return isLoading ? <p>Loading</p> : <Component {...rest as T} />
  }
}

type UserProps = {
  name: string
}
const UserComponent: React.FC<UserProps> = ({ name }) => {
  return <p>hellos, {name}!</p>
}
const UserWithLoading = withLoading(UserComponent);

export const ParentComponent = () => {
  return (
    <div>
      <UserWithLoading isLoading={true} name="Magas" />
      <UserWithLoading isLoading={false} name="Angel" />
    </div>
  );
};
