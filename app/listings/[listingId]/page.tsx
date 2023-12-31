import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById"
import ClientOnly from "@/app/components/general/ClientOnly";
import EmptyState from "@/app/components/general/EmptyState";
import ListingClient from "./ListingClient";
import getReservations from "@/app/actions/getReservations";

interface IParams {
    listingId?: string;
}

const listingPage = async ({ params }: { params: IParams }) => {
    const listing = await getListingById(params);
    const reservations = await getReservations(params);
    const currentUser = await getCurrentUser();

    if (!listing) {
        return (
            <ClientOnly>
                <EmptyState 
                    title="There are no listings yet from you"
                    subtitle="Try adding some"
                />
            </ClientOnly>
        )
    }

    return (
    <ClientOnly>
        <ListingClient
            listing={listing}
            currentUser={currentUser}
            reservations={reservations}
        />
    </ClientOnly>
  )
}

export default listingPage