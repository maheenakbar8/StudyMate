import "../../styles/QuickActions.css";

import { quickActions } from "../../data/quickActions";

import { FiArrowRight } from "react-icons/fi";

export default function QuickActions() {
  return (
    <section className="quick-actions">

      <h2 className="section-title">
  Workspace
</h2>
<p className="section-subtitle">
  Launch your AI study tools with one click.
</p>

      <div className="actions-grid">

        {quickActions.map((action) => {

          const Icon = action.icon;

          return (

            <div
              className="action-card"
              key={action.title}
            >

              <div className="action-icon">

                <Icon />

              </div>

              <h3>{action.title}</h3>

              <p>{action.description}</p>

              <div className="action-footer">

                <span>{action.shortcut}</span>

                <FiArrowRight />

              </div>

            </div>

          );

        })}

      </div>

    </section>
  );
}