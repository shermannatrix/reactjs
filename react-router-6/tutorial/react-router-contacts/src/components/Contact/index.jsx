import { 
	Form, 
	useLoaderData,
	useFetcher 
} from 'react-router-dom';
import { getContact, updateContact } from '../../contacts';

export async function action({request, params}) {
	let formData = await request.formData();
	return updateContact(params.contactId, {
		favourite: formData.get("favourite") === "true",
	});
}

export async function loader({ params }) {
	const contact = await getContact(params.contactId);
	if (!contact) {
		throw new Response("", {
			status: 404,
			statusText: "Not Found",
		});
	}
	return { contact };
}

export default function Contact() {
	const {contact} = useLoaderData();
	//console.log(contact.avatar);

	return (
		<div id="contact">
			<div>
				<img
					key={contact.avatar}
					src={contact.avatar || null}
				/>
			</div>
			<div>
				<h1>
					{contact.first || contact.last ? (
						<>
							{contact.first} {contact.last}
						</>
					) : (
						<i>No Name</i>
					)}{" "}
					<Favourite contact={contact} />
				</h1>

				{contact.twitter && (
					<p>
						<a 
							target="_blank"
							href={`https://twitter.com/${contact.twitter}`}
						>
							{contact.twitter}
						</a>
					</p>
				)}

				{contact.notes && <p>{contact.notes}</p>}

				<div>
					<Form action="edit">
						<button type="submit">Edit</button>
					</Form>
					<Form
						method="post"
						action="destroy"
						onSubmit={(event) => {
							if (!confirm("Please confirm you want to delete this record.")) {
								event.preventDefault();
							}
						}}
					>
						<button type="submit">Delete</button>
					</Form>
				</div>
			</div>
		</div>
	);
}

/* eslint-disable react/prop-types */
function Favourite({contact}) {
	const fetcher = useFetcher();
	let favourite = contact.favourite;

	if (fetcher.formData) {
		favourite = fetcher.formData.get("favourite") === "true";
	}

	return (
		<fetcher.Form method="post">
			<button
				name="favourite"
				value={favourite ? "false" : "true"}
				aria-label={
					favourite
						? "Remove from favourites"
						: "Add to favourites"
				}
			>
				{favourite ? "★" : "☆"}
			</button>
		</fetcher.Form>
	);
}