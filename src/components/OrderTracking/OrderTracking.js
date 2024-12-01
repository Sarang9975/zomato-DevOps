import React, { useState, useEffect } from 'react';
import './OrderTracking.scss';

const OrderTracking = () => {
  const [orderStatus, setOrderStatus] = useState('preparing');
  const [estimatedTime, setEstimatedTime] = useState(25);
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, title: 'Order Confirmed', description: 'Your order has been received' },
    { id: 2, title: 'Preparing', description: 'Chef is cooking your food' },
    { id: 3, title: 'On the Way', description: 'Rider is picking up your order' },
    { id: 4, title: 'Delivered', description: 'Enjoy your meal!' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (estimatedTime > 0) {
        setEstimatedTime(prev => prev - 1);
      }
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, [estimatedTime]);

  const getStatusIcon = (stepId) => {
    if (stepId < currentStep) return '✅';
    if (stepId === currentStep) return '🔄';
    return '⏳';
  };

  return (
    <div className="order-tracking-container">
      <div className="tracking-header">
        <h2>Track Your Order</h2>
        <div className="order-info">
          <span className="order-id">Order #12345</span>
          <span className="estimated-time">ETA: {estimatedTime} min</span>
        </div>
      </div>

      <div className="tracking-steps">
        {steps.map((step) => (
          <div key={step.id} className={`step ${step.id <= currentStep ? 'active' : ''}`}>
            <div className="step-icon">
              {getStatusIcon(step.id)}
            </div>
            <div className="step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="tracking-actions">
        <button className="action-btn primary">Contact Support</button>
        <button className="action-btn secondary">View Order Details</button>
      </div>
    </div>
  );
};

export default OrderTracking; 