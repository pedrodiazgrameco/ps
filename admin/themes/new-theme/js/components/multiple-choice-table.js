/**
 * 2007-2019 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */

const $ = window.$;

/**
 * MultipleChoiceTable is responsible for managing common actions in multiple choice table form type
 */
export default class MultipleChoiceTable {
  /**
   * Init constructor
   */
  constructor() {
    $(document).on('click', '.js-multiple-choice-table-select-column', (e) => this.handleSelectColumn(e));
  }

  /**
   * Check/uncheck all boxes in column
   *
   * @param {Event} event
   */
  handleSelectColumn(event) {
    event.preventDefault();

    const $selectColumnBtn = $(event.target);
    const checked = $selectColumnBtn.data('column-checked');
    $selectColumnBtn.data('column-checked', !checked);

    const $table = $selectColumnBtn.closest('table');

    $table
      .find('tbody tr td:nth-child(' + $selectColumnBtn.data('column-num') + ') input[type=checkbox]')
      .prop('checked', !checked);
  }
}
