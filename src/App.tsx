import React from 'react';
import './App.css';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import MarketsPage from "./pages/MarketsPage";

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <MarketsPage/>
        </QueryClientProvider>
    );
}

export default App;
