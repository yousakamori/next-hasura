import { FC, memo, Dispatch, SetStateAction } from 'react'
import { Users, DeleteUserMutationFn } from '../types/generated/graphql'

type UserItemProps = {
  user: {
    __typename?: 'users'
  } & Pick<Users, 'id' | 'name' | 'created_at'>
  delete_users_by_pk: DeleteUserMutationFn
  setEditedUser: Dispatch<
    SetStateAction<{
      id: string
      name: string
    }>
  >
}

export const UserItem: FC<UserItemProps> = memo(
  ({ user, delete_users_by_pk, setEditedUser }) => {
    return (
      <div className="my-1">
        <span className="mr-2">{user.name}</span>
        <span className="mr-2">{user.created_at}</span>
        <button
          className="px-3 py-1 mr-1 text-white bg-green-600 hover:bg-green-700 rounded-2xl focus:outline-none"
          data-testid={`edit-${user.id}`}
          onClick={() => {
            setEditedUser(user)
          }}
        >
          Edit
        </button>
        <button
          className="px-3 py-1 text-white bg-pink-600 hover:bg-pink-700 rounded-2xl focus:outline-none"
          data-testid={`delete-${user.id}`}
          onClick={async () => {
            await delete_users_by_pk({
              variables: {
                id: user.id,
              },
            })
          }}
        >
          Delete
        </button>
      </div>
    )
  }
)

UserItem.displayName = 'UserItem'
