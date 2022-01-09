import { Spinner } from '../../components';


function WithLoading(WrappedComponent) {
    return function WithLoadingComponent({ isLoading, ...rest }) {
        return (
            <>
                {isLoading && <Spinner />}
                <WrappedComponent {...rest} />
            </>
        );
    }
}


export default WithLoading;