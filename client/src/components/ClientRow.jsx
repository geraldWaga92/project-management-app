import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../mutations/clientMutations";
import { GET_CLIENTS } from "../queries/clientQueries";

export default function ClientRow({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    //this is ok for small queries on the item this code refetch the client when item deleted so that we don't have to reload the browser
    // refetchQueries: [{ query: GET_CLIENTS }],

    // same as above but ideal for large queries
    update(cache, { data: { deleteClient } }) {
        const { clients } = cache.readQuery({ query: GET_CLIENTS });
        cache.writeQuery({
          query: GET_CLIENTS,
          data: {
            clients: clients.filter((client) => client.id !== deleteClient.id),
          },
        });
      },
  });

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={deleteClient}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}
