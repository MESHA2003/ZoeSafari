import React from 'react';

const StatusBadge = ({ status }) => {
    const getStatusClass = (status) => {
        switch (status) {
            case 'pending': return 'status-pending';
            case 'awaiting_payment': return 'status-awaiting_payment';
            case 'payment_submitted': return 'status-payment_submitted';
            case 'confirmed': return 'status-confirmed';
            case 'rejected': return 'status-rejected';
            default: return 'status-pending';
        }
    };

    const getStatusText = (status) => {
        switch (status) {
            case 'pending': return '⏳ Pending Review';
            case 'awaiting_payment': return '💰 Awaiting Payment';
            case 'payment_submitted': return '📤 Payment Submitted';
            case 'confirmed': return '✅ Confirmed';
            case 'rejected': return '❌ Rejected';
            default: return status;
        }
    };

    return (
        <span className={`status-badge ${getStatusClass(status)}`}>
            {getStatusText(status)}
        </span>
    );
};

export default StatusBadge;