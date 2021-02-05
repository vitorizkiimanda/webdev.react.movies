export default function CardSkeleton() {
    return (
        <div className="card">
            <div className="card-skeleton-image shine" />
            <div className="card-text-container">
                <div className="rating-container rating-container-skeleton shine"></div>
                <div className="card-text-title text-skeleton-title shine" />
                <div className="text-skeleton-description shine" />
            </div>
        </div>
    );
}
